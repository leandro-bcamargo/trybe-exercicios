from django.core.exceptions import ValidationError


def validate_song_length(length):
    if not 0 < length <= 3600:
        raise ValidationError(
            "Song length must be between 1 and 3600 seconds."
            f"{length} isn't valid."
        )


def validate_singer_name(name):
    for char in name:
        if not char.isalpha() and not char.isspace():
            raise ValidationError(
                "Singer name can only contain letters and space."
                f"{name} isn't valid."
            )
