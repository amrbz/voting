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

@api.route('/votings', methods=['POST'])
def create_voting():
  connection = client.connect(g.db)
  cursor = connection.cursor()

  try:
    voting_id = str(uuid.uuid4())
    votings_wallet = pw.Address(privateKey=g.votings_wallet_priv_key)
    titles_wallet = pw.Address(privateKey=g.titles_wallet_priv_key)
    descriptions_wallet = pw.Address(privateKey=g.descriptions_wallet_priv_key)

    voters_ids = [str(el) for el in request.json['votersIds']] 
    options_ids = [str(el) for el in request.json['optionsIds']] 
    # options_ids = request.json['optionsIds']
    title = request.json['title']
    description = request.json['description']
    title_id = str(uuid.uuid4())
    description_id = str(uuid.uuid4())
        
    print '*** INIT VOTINGS ***'    

    print '\n--> Generating new voting address'
    wallet = pw.Address()
    print '--> Success'

    print '\n--> Sending Voting transaction from {0} to {1}'.format(votings_wallet.address, wallet.address)
    amount = (len(voters_ids) + len(options_ids)) * 100001
    voting_tx = votings_wallet.sendWaves(recipient = wallet, amount = amount, attachment=str(title))
    print '--> Voting created; TxID: ' + voting_tx['id']
    print '\n--> Saving Voting data to database'

    print 'voters_ids', voters_ids
    print 'options_ids', options_ids
 
    voting_created = int(time.time())
    cursor.execute("""
      INSERT INTO votings(
        id,
        title_id,
        description_id,
        voters_ids,
        options_ids,
        txid,
        address,
        pub_key,
        priv_key,
        created)
      VALUES(
        '{id}', 
        '{title_id}', 
        '{description_id}', 
        {voters_ids},
        {options_ids},
        '{txid}', 
        '{address}', 
        '{pubKey}', 
        '{privKey}', 
        '{created}')
    """.format(
      id=voting_id,
      title_id=title_id,
      description_id=description_id,
      voters_ids=voters_ids,
      options_ids=options_ids,
      txid=voting_tx['id'],
      address=wallet.address,
      pubKey=wallet.publicKey,
      privKey=wallet.privateKey,
      created=voting_created
    ))
    print '--> Success'
    print '\n--> Sending Title transaction from {0} to {1}'.format(titles_wallet.address, wallet.address)
    title_tx = titles_wallet.sendWaves(recipient = wallet, amount = 1, attachment=str(title))
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
      text=title,
      txid=title_tx['id'],
      created=title_created
    ))

    print '--> Success'
    print '\n--> Sending Description transaction from {0} to {1}'.format(descriptions_wallet.address, wallet.address)
    description_tx = descriptions_wallet.sendWaves(recipient = wallet, amount = 1, attachment=str(description))
    print '--> Description sent; TxID: ' + description_tx['id']
    print '\n--> Saving description data to database'
    
    description_created = int(time.time())
    cursor.execute("""
      INSERT INTO descriptions(
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
      id=description_id, 
      text=description,
      txid=description_tx['id'],
      created=description_created
    ))
    print '--> Success'

    print '--> Waiting for incoming transactions'
    time.sleep(9)
    print '--> Done'


    for voter_id in voters_ids:
      cursor.execute("""
        SELECT address FROM voters
        WHERE id='{voter_id}'
      """.format(
        voter_id=voter_id
      ))
      voter_address = cursor.fetchone()[0]
      print '\n--> Sending Voting transaction from {0} to {1}'.format(wallet.address, voter_address)
      voting_tx = wallet.sendWaves(recipient = pw.Address(voter_address), amount = 1)
      print '--> Voting to voter sent; TxID: ' + voting_tx['id']

    for option_id in options_ids:
      cursor.execute("""
        SELECT address FROM options
        WHERE id='{option_id}'
      """.format(
        option_id=option_id
      ))
      option_address = cursor.fetchone()[0]
      print '\n--> Sending Options transaction from {0} to {1}'.format(wallet.address, option_address)
      option_tx = wallet.sendWaves(recipient = pw.Address(option_address), amount = 1)
      print '--> Voting to optoin sent; TxID: ' + option_tx['id']

    print '*** DONE VOTINGS ***'


  
  except Exception, error:
    return bad_request(error)
  finally:
    cursor.close()
    connection.close()
  
  data = {
    'id': voting_id, 
    'title': {
      'id': title_id,
      'text': title,
      'txid': title_tx['id'],
      'created': title_created,
    },
    'description': {
      'id': description_id,
      'text': description,
      'txid': description_tx['id'],
      'created': description_created,
    },
    'txid': voting_tx['id'],
    'address': wallet.address,
    'created': voting_created,
  }

  response = make_response(jsonify(data))
  response.status_code = 201
  return response


@api.route('/votings', methods=['GET'])
def get_votings():
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
        t.txid,
        t.text,
        t.created,
        d.id,
        d.txid,
        d.text,
        d.created
      FROM votings v
      LEFT JOIN titles t ON t.id = v.title_id
      LEFT JOIN descriptions d ON d.id = v.description_id
    """)
    votings = cursor.fetchall()

  except Exception, error:
		return bad_request(error)
  finally:
    cursor.close()
    connection.close()

  if len(votings) == 0:
    return ('', 204)

  data = []
  for voting in votings:
    data.append({
      'id': voting[0],
      'title': {
        'id': voting[4],
        'txid': voting[5],
        'text': voting[6],
        'created': voting[7],
      },
      'description': {
        'id': voting[8],
        'txid': voting[9],
        'text': voting[10],
        'created': voting[11],
      },
      'txid': voting[1],
      'address': voting[2],
      'created': voting[3]
    })

  response = make_response(jsonify(data))
  response.status_code = 200
  return response


@api.route('/votings/<voting_id>', methods=['GET'])
def get_voting(voting_id):
  connection = client.connect(g.db)
  cursor = connection.cursor()

  try:
    cursor.execute("""
      SELECT
        v.id,
        v.txid,
        v.address,
        v.created,
        v.options_ids,
        v.voters_ids,
        t.id,
        t.txid,
        t.text,
        t.created,
        d.id,
        d.txid,
        d.text,
        d.created
      FROM votings v
      LEFT JOIN titles t ON t.id = v.title_id
      LEFT JOIN descriptions d ON d.id = v.description_id
      WHERE v.id='{voting_id}'
    """.format(voting_id=voting_id))
    voting = cursor.fetchone()

    cursor.execute("""
      SELECT
        o.id,
        o.txid,
        o.address,
        o.created,
        t.id,
        t.txid,
        t.text,
        t.created
      FROM options o
      LEFT JOIN titles t ON t.id = o.title_id
      WHERE o.id in {options_ids}
    """.format(
      options_ids=tuple(tuple([str(el) for el in voting[4]]))
    ))
    options = cursor.fetchall()
    options_data = []
    for option in options:
      options_data.append({
        'id': option[0],
        'txid': option[1],
        'address': option[2],
        'created': option[3],
        'title': {
          'id': option[4],
          'txid': option[5],
          'text': option[6],
          'created': option[7],
        }
      })


    cursor.execute("""
      SELECT
        v.id,
        v.txid,
        v.address,
        v.created,
        v.priv_key,
        t.id,
        t.txid,
        t.text,
        t.created
      FROM voters v
      LEFT JOIN titles t ON t.id = v.title_id
      WHERE v.id in {voters_ids}
    """.format(
      voters_ids=tuple([str(el) for el in voting[5]])
    ))
    voters = cursor.fetchall()

    voters_data = []
    for voter in voters:
      voters_data.append({
        'id': voter[0],
        'txid': voter[1],
        'address': voter[2],
        'created': voter[3],
        'privKey': voter[4],
        'title': {
          'id': voter[5],
          'txid': voter[6],
          'text': voter[7],
          'created': voter[8],
        }
      })


  except Exception, error:
		return bad_request(error)
  finally:
    cursor.close()
    connection.close()

  if not voting:
    return ('', 204)

  data = {
    'id': voting[0],
      'title': {
        'id': voting[6],
        'txid': voting[7],
        'text': voting[8],
        'created': voting[9],
      },
      'description': {
        'id': voting[10],
        'txid': voting[11],
        'text': voting[12],
        'created': voting[13],
      },
      'txid': voting[1],
      'address': voting[2],
      'created': voting[3],
      'options': options_data,
      'voters': voters_data,
  }

  response = make_response(jsonify(data))
  response.status_code = 200
  return response
