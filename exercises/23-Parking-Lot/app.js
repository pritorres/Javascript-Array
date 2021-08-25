let parking_state = [
  [1, 1, 1],
  [0, 0, 0],
  [1, 1, 2]
]
function getParkingLotState() {
  let totalSlots = [];
  let availableSlots = [];
  let occupiedSlots = [];
  for (let index = 0; index < parking_state.length; index++) {
    const element = parking_state[index];

    for (let index_1 = 0; index_1 < element.length; index_1++) {
      const element_1 = element[index_1];


      if (element_1 == 2) {
        totalSlots.push(element_1)
        availableSlots.push(element_1)
      }

      else if (element_1 == 1) {
        totalSlots.push(element_1)
        occupiedSlots.push(element_1)
      }

    }

  }
  return {
    totalSlots: totalSlots.length,
    availableSlots: availableSlots.length,
    occupiedSlots: occupiedSlots.length,
  }
}


console.log(getParkingLotState(parking_state))