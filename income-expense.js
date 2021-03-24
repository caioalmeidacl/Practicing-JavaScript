/* //  Sistema de gastos familiar 


Criar um objeto que possuirá 2 propriedades, ambas do tipo array: 
 *  receitas: [Entrada de dinheiro]
 *  despesas: [Saida]

Agora , crie uma function que ira calcular o total de receitar e despesas e ira mostrar uma mensagem se a familia esta com saldo positivo ou negativo, seguido ao valor do saldo.
*/

let family = {
    incomes: [1440 , 800],
    expenses: [200, 50, 700]
}

function sum(array) {
    let total = 0; 

    for(let value of array){ 
        total += value
    }


    return total
}

function getTotalBalance() {
    const calulateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)
    const totalBalance = calulateIncomes - calculateExpenses

    let textMessage = "negativo"

    if(totalBalance >= 0) {
        textMessage = "positivo"
    }

   console.log(`Seu saldo é ${textMessage}: ${totalBalance}`) 
}


getTotalBalance()