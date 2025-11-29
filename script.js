function parseSet(text) {
  return new Set(
    text
      .replace("{", "")
      .replace("}", "")
      .split(",")
      .map(Number)
  );
}

function calculate() {
  const A = parseSet(document.getElementById("setA").value);
  const B = parseSet(document.getElementById("setB").value);

  const union = new Set([...A, ...B]);
  const intersection = new Set([...A].filter(x => B.has(x)));
  const difference = new Set([...A].filter(x => !B.has(x)));

  document.getElementById("result").innerHTML = `
    <p><b>اجتماع A ∪ B:</b> {${[...union]}}</p>
    <p><b>اشتراک A ∩ B:</b> {${[...intersection]}}</p>
    <p><b>تفاضل A − B:</b> {${[...difference]}}</p>
  `;
}
