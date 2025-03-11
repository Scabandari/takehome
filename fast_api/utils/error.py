from fastapi import HTTPException


def extract_exception_message(e: Exception) -> str:
    try:
        if e.error.innererror["message"]:
            exception_msg = e.error.innererror["message"]
            if "file is corrupted" in exception_msg:
                return "File is corrupted: if the file is .docx export it as .pdf and try the .pdf version"
            return
    except Exception:
        pass

    # Check for a 'message' attribute
    if hasattr(e, "message"):
        if e.message is not None:
            return e.message

    # Check for a 'detail' attribute (common in FastAPI's HTTPException)
    if isinstance(e, HTTPException) and hasattr(e, "detail"):
        return str(e.detail)

    # Check for 'e.obj.detail'
    if hasattr(e, "obj") and hasattr(e.obj, "detail"):
        return str(e.obj.detail)

    # Fallback to the string representation of the exception
    return str(e)
