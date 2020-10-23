function cells(initialConfiguration, k) {
    var config = initialConfiguration;
    for (let cpt = 0; cpt < k; cpt++) {
        config = tourSuivant(config);
    }
    console.log(config);
}


function tourSuivant(config) {
    var n = config.length;
    var res = []; // config au tour suivant
    var left, right;
    for (let cpt = 0; cpt < n; cpt++) {
        let newcell;
        left = left = ((cpt === 0) ? (n - 1) : (cpt - 1));
        right = right = ((cpt === n - 1) ? 0 : (cpt + 1));
        // cas ou la cellule reçoit 2 signaux et passe à quiet
        if (config[left] === '1' && config[right] === '1') {
            newcell = '0';
        }
        else {
            // cas ou la cellule est en repos
            if (config[cpt] === '0') {
                if ((config[left] === '1' && config[right] === '0') || (config[left] === '0' && config[right] === '1')) {
                    newcell = '1';// cellule devient excitée
                }
                else if (config[left] === config[right] === '0') {
                    newcell = config[cpt];
                }
                else
                    newcell = '0'
            }
            else { // la cellule est excitée 
                if (config[left] === '0' && config[right] === '0') {
                    newcell = '0';
                }
                else {
                    newcell = '1';
                }
            }
        }
        res.push(newcell);

    }
    return res;
}

cells(['0', '1', '1', '0', '0', '1', '0'], 2);