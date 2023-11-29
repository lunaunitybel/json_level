function generateJSON() {
    const moves = document.getElementById('moves').value;
    const objectives = document.getElementById('objectives').value;
    const voidData = document.getElementById('void').value;
    const layer1 = document.getElementById('layer1').value;
    const pieces = document.getElementById('pieces').value;

    const jsonData = {
        moves,
        objectives,
        void: voidData,
        layer1,
        pieces,
    };

    const jsonString = JSON.stringify(jsonData, null, 2);

    document.getElementById('jsonOutput').value = jsonString;
}
