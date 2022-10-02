document.getElementById("calculate-btn").addEventListener("click", function () {
    const playerInputField = document.getElementById("player-budget").value;
    const playerCost = playerInputField * liArray;
    const playerTotalCost = document.getElementById("player-expenses");
    playerTotalCost.innerText =playerCost;
    if(isNaN(playerInputField)){
        playerTotalCost.innerText = 0;
        alert('please enter number');
    }
    


    document.getElementById("total-expenses").addEventListener("click", function () {
        const managerFeeString = document.getElementById("manager-budget").value;
        const managerFee = parseInt(managerFeeString);
        const coachFeeString = document.getElementById("coach-budget").value;
        const coachFee = parseInt(coachFeeString);
        const totalCost = playerCost + managerFee + coachFee;
        document.getElementById("total-cost").innerHTML = totalCost;
    })

})