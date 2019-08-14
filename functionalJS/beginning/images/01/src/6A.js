function printMsg(elementId, format, msg) {
    document.querySelector(`#${elementId}`).innerHTML = `<${format}>${message}</${format}>`;
}

