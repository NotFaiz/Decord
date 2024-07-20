function runPython() {
    var code = document.getElementById('code').value;
    var output = document.getElementById('output');
    try {
        // Using Brython to execute the Python code
        __BRYTHON__.run_script(code);
    } catch (e) {
        output.innerHTML = "Error: " + e;
    }
}

function clearCode() {
    document.getElementById('code').value = '';
    document.getElementById('output').innerHTML = '';
}

document.getElementById('run-button').addEventListener('click', runPython);
document.getElementById('clear-button').addEventListener('click', clearCode);
