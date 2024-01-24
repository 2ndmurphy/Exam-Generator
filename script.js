function tambahData() {
    var questInput = document.getElementById('question');
    var opsiInput = document.getElementById('option');
    var timeInput = document.getElementById('time');
    var body = document.getElementById('barangBody');

    var questVal = questInput.value;
    var opsiVal = opsiInput.value;
    var timeVal = timeInput.value;

    var newRow = body.insertRow();
    var cellNo = newRow.insertRow(0);
    var cellQuest = newRow.insertRow(1);
   }