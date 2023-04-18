var percentage = 900;
if (percentage >= 85 && percentage <= 100) {
    console.log("FCD");
}
else if (percentage >= 60 && percentage < 85) {
    console.log("First Class");
}
else if (percentage >= 35 && percentage < 60) {
    console.log("Pass");
}
else if (percentage >= 0 && percentage < 35) {
    console.log("Second class");
}
else {
    console.log("Enter number between 0 and 100");
}
