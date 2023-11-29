function generateJSON() {
    
    const author = document.getElementById('author').value;
    const level_id = document.getElementById('level_id').value;
    const level_version = document.getElementById('level_version').value;
    const ordinal = document.getElementById('ordinal').value;
    const moves = document.getElementById('moves').value;
    const objectives = document.getElementById('objectives').value;
    const voidData = document.getElementById('void').value;
    const layer1 = document.getElementById('layer1').value;
    const pieces = document.getElementById('pieces').value;

    const jsonData = {
        author,
        level_id,
        level_version,
        ordinal,
        moves,
        objectives,
        void: voidData,
        layer1,
        pieces,
    };

    const jsonString = JSON.stringify(jsonData, null, 2);

    document.getElementById('jsonOutput').value = jsonString;
}
