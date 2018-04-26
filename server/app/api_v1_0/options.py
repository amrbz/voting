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

@api.route('/options', methods=['POST'])
def create_option():
  connection = client.connect(g.db)
  cursor = connection.cursor()

  try:
    options_wallet = pw.Address(privateKey=g.options_wallet_priv_key)
    titles_wallet = pw.Address(privateKey=g.titles_wallet_priv_key)
    options = request.json['options']

    print '*** INIT OPTIONS ***'
    
    data = []
    for option in options:
      option_id = str(uuid.uuid4())
      title_id = str(uuid.uuid4())
      print '\n--> Generating new option address for ', option
      wallet = pw.Address()
      print '--> Success'
      print '\n--> Sending option transaction from {0} to {1}'.format(options_wallet.address, wallet.address)
      option_tx = options_wallet.sendWaves(recipient = wallet, amount = 1)
      print '--> option created; TxID: ' + option_tx['id']
      print '\n--> Saving option data to database'
    
      option_created = int(time.time())
      cursor.execute("""
        INSERT INTO options(
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
        id=option_id, 
        title_id=title_id,
        address=wallet.address,
        pubKey=wallet.publicKey,
        privKey=wallet.privateKey,
        txid=option_tx['id'],
        created=option_created
      ))

      print '--> Success'
      print '\n--> Sending Title transaction from {0} to {1}'.format(titles_wallet.address, wallet.address)
      title_tx = titles_wallet.sendWaves(recipient = wallet, amount = 1, attachment=str(option))
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
        text=option,
        txid=title_tx['id'],
        created=title_created
      ))

      print '--> Success'
      print '\n--------------------------------\n'

      data.append({
        'id': option_id, 
        'title': {
          'id': title_id,
          'text': option,
          'txid': title_tx['id'],
          'created': title_created,
        },
        'txid': option_tx['id'],
        'address': wallet.address,
        'created': option_created,
      })
    
    print '*** DONE OPTIONS ***'
  
  except Exception, error:
    return bad_request(error)
  finally:
    cursor.close()
    connection.close()

  response = make_response(jsonify({
    'options': data
  }))
  response.status_code = 201
  return response


@api.route('/options', methods=['GET'])
def get_options():
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
      FROM votings v, titles t
      WHERE t.id = v.title_id
    """)
    options = cursor.fetchall()

  except Exception, error:
		return bad_request(error)
  finally:
    cursor.close()
    connection.close()

  if len(options) == 0:
    return ('', 204)

  data = []
  for option in options:
    data.append({
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
    })

  response = make_response(jsonify(data))
  response.status_code = 200
  return response


# @api.route('/votings/<voting_id>', methods=['GET'])
# def get_issue(voting_id):
#   connection = client.connect(g.db)
#   cursor = connection.cursor()

#   try:
#     cursor.execute("""
#       SELECT
#         v.id,
#         v.title,
#         v.description,
#         v.txid,
#         v.address,
#         v.created
#       FROM votings i
#       WHERE i.id='{voting_id}'
#     """.format(voting_id=voting_id))
#     voting = cursor.fetchone()

#   except Exception, error:
# 		return bad_request(error)
#   finally:
#     cursor.close()
#     connection.close()

#   if not voting:
#     return ('', 204)


#   data = {
#     'id': voting[0],
#     'title': voting[1],
#     'description': voting[2],
#     'txid': voting[3],
#     'address': voting[4],
#     'created': voting[5]
#   }

#   response = make_response(jsonify(data))
#   response.status_code = 200
#   return response
