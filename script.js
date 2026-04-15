const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // LOGIN PADRÃO
    if (email === "Mz@Am" && senha === "2003") {
        window.location.href = "gastos.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
});

let total = 0;
let ganhos = 0;
let despesas = 0;

function adicionar() {
    const desc = document.getElementById("descricao").value;
    const val = Number(document.getElementById("valor").value);
    const tipo = document.getElementById("tipo").value;

    if (!desc || !val) {
        alert("Preencha tudo");
        return;
    }

    const lista = document.getElementById("lista");
    const li = document.createElement("li");

    if (tipo === "ganho") {
        ganhos += val;
        total += val;
        li.textContent = "+ " + desc + " - R$ " + val;
        li.style.color = "lightgreen";
    } else {
        despesas += val;
        total -= val;
        li.textContent = "- " + desc + " - R$ " + val;
        li.style.color = "red";
    }

    lista.appendChild(li);

    document.getElementById("total").textContent = "R$ " + total.toFixed(2);
    document.getElementById("ganhos").textContent = "R$ " + ganhos.toFixed(2);
    document.getElementById("despesas").textContent = "R$ " + despesas.toFixed(2);

    document.getElementById("descricao").value = "";
    document.getElementById("valor").value = "";
}