'use strict'
function butclick(number) {
   document.getElementById('but' + number).classList.toggle('active_but');
   if ( document.getElementById("all_but").classList.contains('active_but') ) {
        document.getElementById('all_but').classList.toggle('active_but');
        document.getElementById("all_but").classList.add("project_but");
   };
};

function allbut() {
    if ( document.getElementById("all_but").classList.contains('project_but')) {
        document.getElementById('all_but').classList.toggle('active_but');
        if ( document.getElementById("all_but").classList.contains('active_but')) {
            document.getElementById('but1').classList.remove('active_but');
            document.getElementById('but2').classList.remove('active_but');
            document.getElementById('but3').classList.remove('active_but');
            document.getElementById('but4').classList.remove('active_but');
        }
    }
};