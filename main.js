let slaCompliance = {
    JAN: {
        withinSLA: 12,
        outsideSLA: 28,
        date: 'Jan 2018'
    },
    FEB: {
        withinSLA: 50,
        outsideSLA: 20,
        date: 'Feb 2018'
    },
    MAR: {
        withinSLA: 92,
        outsideSLA: 8,
        date: 'Mar 2018'
    },
    APR: {
        withinSLA: 80,
        outsideSLA: 10,
        date: 'Apr 2018'
    },
    MAY: {
        withinSLA: 35,
        outsideSLA: 65,
        date: 'May 2018'
    },
    JUN: {
        withinSLA: 75,
        outsideSLA: 15,
        date: 'Jun 2018'
    },
    JUL: {
        withinSLA: 20,
        outsideSLA: 40,
        date: 'Jul 2018'
    },
    AUG: {
        withinSLA: 4,
        outsideSLA: 16,
        date: 'Aug 2018'
    },
    SEP: {
        withinSLA: 25,
        outsideSLA: 75,
        date: 'Sep 2018'
    },
    OCT: {
        withinSLA: 40,
        outsideSLA: 30,
        date: 'Oct 2018'
    },
    NOV: {
        withinSLA: 35,
        outsideSLA: 35,
        date: 'Nov 2018'
    },
    DEC: {
        withinSLA: 21,
        outsideSLA: 49,
        date: 'Dec 2018'
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

                    <div class="chart__entry__detail">
                        <div>` + slaCompliance[entry].date + `</div>
                        <div class="chart__keys__item">
                            <div class="chart__keys__item--green"></div>
                            <div class="chart__keys__item__label">` + slaCompliance[entry].withinSLA + `%</div>
                        </div>
                        <div class="chart__keys__item">
                            <div class="chart__keys__item--red"></div>
                            <div class="chart__keys__item__label">`+ slaCompliance[entry].outsideSLA + `%</div>
                        </div>
                        <img src="./assets/icons/drop-down-arrow.svg" alt="" />
                    </div>
                </div>
            `);
        }
    }
}