let slaCompliance = {
    JAN: {
        withinSLA: 12,
        outsideSLA: 28
    },
    FEB: {
        withinSLA: 80,
        outsideSLA: 20
    },
    MAR: {
        withinSLA: 92,
        outsideSLA: 8
    },
    APR: {
        withinSLA: 80,
        outsideSLA: 20
    },
    MAY: {
        withinSLA: 35,
        outsideSLA: 65
    },
    JUN: {
        withinSLA: 75,
        outsideSLA: 25
    },
    JUL: {
        withinSLA: 60,
        outsideSLA: 40
    },
    AUG: {
        withinSLA: 4,
        outsideSLA: 96
    },
    SEP: {
        withinSLA: 25,
        outsideSLA: 75
    },
    OCT: {
        withinSLA: 40,
        outsideSLA: 60
    },
    NOV: {
        withinSLA: 65,
        outsideSLA: 35
    },
    DEC: {
        withinSLA: 21,
        outsideSLA: 49
    },
}

const dataset = () => {
    for (var entry in slaCompliance) {
        if (slaCompliance.hasOwnProperty(entry)) {
            document.write(`
                <div class="chart__entry">
                    <div class="chart__entry__litr border-bottom">` + slaCompliance[entry].outsideSLA + `%</div>
                    <div class="chart__entry__val">
                        <div style="height:`+ slaCompliance[entry].outsideSLA + `%;" class="chart__entry__val--red"></div>
                        <div style="height:` + slaCompliance[entry].withinSLA + `%" class="chart__entry__val--green"></div>
                    </div>
                    <div class="chart__entry__litr">` + slaCompliance[entry].withinSLA + `%</div>
                    <div class="chart__entry__litr">` + entry + `</div>
                </div>
            `);
        }
    }
}