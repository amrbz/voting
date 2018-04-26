# -*- coding: utf-8 -*-
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

import uuid
import time
import pywaves as pw
from crate import client

from . import api
from flask import jsonify, request, g, make_response
from errors import bad_request, validation_error, unavailable

@api.route('/voters', methods=['POST'])
def create_voter():
  connection = client.connect(g.db)
  cursor = connection.cursor()

  try:
    voters_wallet = pw.Address(privateKey=g.voters_wallet_priv_key)
    titles_wallet = pw.Address(privateKey=g.titles_wallet_priv_key)
    voters = request.json['voters']

    print '*** INIT VOTERS ***'
    
    data = []
    for voter in voters:
      voter_id = str(uuid.uuid4())
      title_id = str(uuid.uuid4())

      print '\n--> Generating new voter address for ', voter
      wallet = pw.Address()
      print '--> Success'
      print '\n--> Sending Voter transaction from {0} to {1}'.format(voters_wallet.address, wallet.address)
      voter_tx = voters_wallet.sendWaves(recipient = wallet, amount = 50000)
      print '--> Voter created; TxID: ' + voter_tx['id']
      print '\n--> Saving voter data to database'
    
      voter_created = int(time.time())
      cursor.execute("""
        INSERT INTO voters(
          id,
          title_id,
          txid,
          address,
          pub_key,
          priv_key,
          created)
        VALUES(
          '{id}',
          '{title_id}', 
          '{txid}', 
          '{address}', 
          '{pubKey}', 
          '{privKey}', 
          '{created}')
      """.format(
        id=voter_id, 
        title_id=title_id,
        address=wallet.address,
        pubKey=wallet.publicKey,
        privKey=wallet.privateKey,
        txid=voter_tx['id'],
        created=voter_created
      ))

      print '--> Success'
      print '\n--> Sending Title transaction from {0} to {1}'.format(titles_wallet.address, wallet.address)
      title_tx = titles_wallet.sendWaves(recipient = wallet, amount = 50000, attachment=str(voter))
      print '--> Title sent; TxID: ' + title_tx['id']
      print '\n--> Saving title data to database'
      
      title_created = int(time.time())
      cursor.execute("""
        INSERT INTO titles(
          id,
          text,
          txid,
          created)
        VALUES(
          '{id}', 
          '{text}',  
          '{txid}', 
          '{created}')
      """.format(
        id=title_id, 
        text=voter,
        txid=title_tx['id'],
        created=title_created
      ))

      print '--> Success'
      print '\n--------------------------------\n'

      data.append({
        'id': voter_id, 
        'title': {
          'id': title_id,
          'text': voter,
          'txid': title_tx['id'],
          'created': title_created,
        },
        'txid': voter_tx['id'],
        'address': wallet.address,
        'created': voter_created,
      })
    
    print '*** DONE VOTERS ***'
  
  except Exception, error:
    return bad_request(error)
  finally:
    cursor.close()
    connection.close()

  response = make_response(jsonify({
    'voters': data
  }))
  response.status_code = 201
  return response


@api.route('/voters', methods=['GET'])
def get_voters():
  connection = client.connect(g.db)
  cursor = connection.cursor()

  try:
    cursor.execute("""
      SELECT
        v.id,
        v.txid,
        v.address,
        v.created,
        t.id,
        t.text,
        t.txid,
        t.created
      FROM voters v, titles t
      WHERE t.id = v.title_id
    """)
    voters = cursor.fetchall()

  except Exception, error:
		return bad_request(error)
  finally:
    cursor.close()
    connection.close()

  if len(voters) == 0:
    return ('', 204)

  data = []
  for voter in voters:
    data.append({
      'id': voter[0],
      'txid': voter[1],
      'address': voter[2],
      'created': voter[3],
      'title': {
        'id': voter[4],
        'text': voter[5],
        'txid': voter[6],
        'created': voter[7]
      }
    })

  response = make_response(jsonify(data))
  response.status_code = 200
  return response



@api.route('/vote', methods=['POST'])
def vote():
  connection = client.connect(g.db)
  cursor = connection.cursor()

  try:
    priv_key = request.json['privKey']
    option_id = request.json['optionId']
    voting_id = request.json['votingId']
    voter_wallet = pw.Address(privateKey=priv_key)
    vote_id = str(uuid.uuid4())

    print '*** INIT VOTE ***'

    print '\n--> Selecting voters data'
    cursor.execute("""
      SELECT
        v.id,
        v.txid,
        v.address,
        v.created,
        t.id,
        t.text,
        t.txid,
        t.created
      FROM voters v, titles t
      WHERE t.id = v.title_id
      AND v.priv_key = '{priv_key}'
    """.format(
      priv_key=priv_key
    ))
    voter = cursor.fetchone()

    assert voter
    print '--> Success'
    print '\n--> Selecting options data'
    
    cursor.execute("""
      SELECT
        o.id,
        o.txid,
        o.address,
        o.created,
        t.id,
        t.text,
        t.txid,
        t.created
      FROM options o, titles t
      WHERE t.id = o.title_id
      AND o.id = '{option_id}'
    """.format(
      option_id=option_id
    ))
    option = cursor.fetchone()

    assert option 
    print '--> Success'   

    print '\n--> Sending Vote transaction from {0} to {1}'.format(voter[2], option[2])
    vote_tx = voter_wallet.sendWaves(recipient = pw.Address(option[2]), amount = 1)
    print '--> Vote sent; TxID: ' + vote_tx['id']
    print '\n--> Saving voter data to database'

    vote_created = int(time.time())
    cursor.execute("""
      INSERT INTO votes(
        id,
        voter_id,
        option_id,
        voting_id,
        txid,
        created)
      VALUES(
        '{id}',
        '{voter_id}', 
        '{option_id}',
        '{voting_id}', 
        '{txid}', 
        '{created}')
    """.format(
      id=vote_id,
      voter_id=voter[0],
      option_id=option[0],
      voting_id=voting_id,
      txid=vote_tx['id'],
      created=vote_created
    ))

    print '--> Success'
    print '*** DONE VOTE ***'
  
  except Exception, error:
    return bad_request(error)
  finally:
    cursor.close()
    connection.close()

  response = make_response(jsonify({
    'option': {
      'id': option[0],
      'txid': option[1],
      'address': option[2],
      'created': option[3],
      'title': {
        'id': option[4],
        'text': option[5],
        'txid': option[6],
        'created': option[7]
      }
    },
    'voter': {
      'id': voter[0],
      'txid': voter[1],
      'address': voter[2],
      'created': voter[3],
      'title': {
        'id': voter[4],
        'text': voter[5],
        'txid': voter[6],
        'created': voter[7]
      }
    },
    'vote': {
      'id': vote_id,
      'txid': vote_tx['id'],
      'created': vote_created,
    }
  }))
  response.status_code = 201
  return response
