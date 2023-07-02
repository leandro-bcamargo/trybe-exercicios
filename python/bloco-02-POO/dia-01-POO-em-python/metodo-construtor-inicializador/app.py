class Database:
    """Creates a Database instance

    Parameters
    ----------
    dialect : str
    user : str
    host : str
    password : str
    database : str
    port : str | int, optional, by default ""

    >>> database = Database(
    ...     dialect = "",
    ...     user = "",
    ...     host = "",
    ...     password = "",
    ...     database = "",
    ...     port = "a",
    ... )
    Traceback (most recent call last):
    ...
    ValueError: `port` must have a numeric value"""

    """
    >>> Database(
    ...     dialect = "",
    ...     user = "",
    ...     host = "",
    ...     password = "",
    ...     database = "",
    ... )
    Traceback (most recent call last):
    ...
    ValueError: invalid default `port` for unrecognized `dialect`

    >>> print(Database(
    ...     dialect = "postgres",
    ...     user = "tryber",
    ...     host = "trybe",
    ...     password = "i_love_python",
    ...     database = "computer_science",
    ... ).connection_url)
    postgres://tryber:i_love_python@trybe:5432/computer_science"""

    def __init__(
        self,
        dialect: str,
        user: str,
        host: str,
        password: str,
        database: str,
        port: str | int = "",
    ) -> None:
        self.dialect = dialect
        self.user = user
        self.host = host
        self.password = password
        self.database = database
        if not port:
            if database == "mysql":
                self.port = 3306
            elif database == "postgres":
                self.port = 5432
            else:
                raise ValueError(
                    "invalid default `port` for unrecognized `dialect`"
                )
        if not port.isdigit():
            raise ValueError("`port` must have a numeric value")
        self.dialect = dialect
        self.port = port
        self.connection_url = "{}://{}:{}@{}:{}/{}".format(
            dialect,
            user,
            password,
            host,
            port,
            database,
        )
