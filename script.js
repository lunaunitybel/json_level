function generateJSON() {
    const author = document.getElementById('author').value;
    const level_id = document.getElementById('level_id').value;
    const level_version = document.getElementById('level_version').value;
    const ordinal = document.getElementById('ordinal').value;
    const moves = document.getElementById('moves').value;
    console.log(document.getElementById('objectives_blocker1'));
    const objectives_blocker1 = document.getElementById('objectives_blocker_1').value;
    const objectives_blocker2 = document.getElementById('objectives_blocker_2').value;
    const objectives_blocker3 = document.getElementById('objectives_blocker_3').value;
    const voidData = document.getElementById('void').value;
    const layer1 = document.getElementById('layer1').value;
    const pieces = document.getElementById('pieces').value;

    const jsonData = {
        author,
        level_id,
        level_version,
        ordinal,
        moves,
        objectives_blocker1,
        objectives_blocker2,
        objectives_blocker3,
        void: voidData,
        layer1,
        pieces,
    };

    const jsonString = JSON.stringify(jsonData, null, 2);

    // Use textContent or innerHTML to set the content of the pre element
    document.getElementById('jsonOutput').textContent = jsonString;
    // or document.getElementById('jsonOutput').innerHTML = jsonString;
}