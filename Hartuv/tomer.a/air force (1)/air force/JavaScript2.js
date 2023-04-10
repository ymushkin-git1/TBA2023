function advanceAirman(airman) {
    var newRank;
    switch (airman.rank) {
        case "Airman Basic":
            if (airman.yearsOfService >= 6) {
                newRank = "Airman";
            }
            break;
        case "Airman":
            if (airman.yearsOfService >= 6) {
                newRank = "Airman First Class";
            }
            break;
        case "Airman First Class":
            if (airman.yearsOfService >= 6) {
                newRank = "Senior Airman";
            }
            break;
        case "Senior Airman":
            if (airman.yearsOfService >= 6) {
                newRank = "Staff Sergeant";
            }
            break;
        case "Staff Sergeant":
            if (airman.yearsOfService >= 6) {
                newRank = "Technical Sergeant";
            }
            break;
        case "Technical Sergeant":
            if (airman.yearsOfService >= 6) {
                newRank = "Master Sergeant";
            }
            break;
        case "Master Sergeant;
