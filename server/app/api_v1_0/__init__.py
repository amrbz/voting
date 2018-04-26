from flask import Blueprint

api = Blueprint('api', __name__)
from . import (
    authentication,
    errors,
    filehash,
    votings,
    voters,
    options,
)
