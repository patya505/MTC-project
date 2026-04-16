function calculateEntropy() {
    let textBox = document.getElementById("inputText");
    let text = textBox.value;
    if (text.length === 0) {
        document.getElementById("result").innerHTML = "Please enter text!";
        return;
    }

    let freq = {};

    for (let char of text) {
        freq[char] = (freq[char] || 0) + 1;
    }

    let entropy = 0;
    let length = text.length;

    for (let char in freq) {
        let p = freq[char] / length;
        entropy += -p * Math.log2(p);
    }

    document.getElementById("result").innerHTML =
        "Entropy: " + entropy.toFixed(4) + " bits";

    // 🔥 REMOVE TEXTBOX + BUTTON
    textBox.style.display = "none";
    document.querySelector("button").style.display = "none";
}