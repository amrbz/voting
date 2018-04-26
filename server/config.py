import os

class Config:
    DEBUG = False
    TESTING = False
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'secret'
    SSL_DISABLE = True
    PROPAGATE_EXCEPTIONS = False
    
    VOTERS_WALLET_PRIV_KEY = ''
    OPTIONS_WALLET_PRIV_KEY = ''
    VOTINGS_WALLET_PRIV_KEY = ''
    TITLES_WALLET_PRIV_KEY = ''
    DESCRIPTIONS_WALLET_PRIV_KEY = ''

    @staticmethod
    def init_app(app):
        pass


class DevelopmentConfig(Config):
    DEBUG = True
    DATABASE_URL = os.environ.get('DATABASE_URL') or 'http://crate:4200'
    ORIGINS=['http://localhost:7210']

class TestingConfig(Config):
    TESTING = True
    DATABASE_URL = os.environ.get('DATABASE_URL') or 'http://crate:4200'
    ORIGINS=['http://localhost:7210']

class ProductionConfig(Config):
    SSL_DISABLE = True
    DATABASE_URL = os.environ.get('DATABASE_URL') or 'http://crate:4200'
    ORIGINS=['http://localhost:7210']



config = {
    'development': DevelopmentConfig,
    'testing': TestingConfig,
    'production': ProductionConfig,
    'default': DevelopmentConfig
}
