let saldo = parseInt(prompt("Qual o seu saldo?"))
let compra = parseInt(prompt("Qual o valor da compra?"))
alert("Seu saldo é de " + saldo + " reais e você deseja realizar uma compra de " + compra+ " reais.")
if (saldo>=compra)
{
    saldo -= compra
    alert("A compra ocorreu corretamente. O seu saldo atual é de " + saldo + " reais.")
}
else
{
    alert("Saldo insuficiente")
}