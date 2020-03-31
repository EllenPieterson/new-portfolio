function burgerFunction() {
    var x = document.getElementById("navitems");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

new TypeIt("#nameTyping", {
    speed: 75,
    startDelay: 500,
    waitUntilVisible: true,
    breakLines: true
})
.type("Ellen Betty Pieterson")
.break()
.options({ nextStringDelay: 750, speed: 75})
.type("Student.")
.options({ deleteSpeed: 100, speed: 75 })
.delete(8)
.pause(750)
.type("Software Developer.")
.go();

