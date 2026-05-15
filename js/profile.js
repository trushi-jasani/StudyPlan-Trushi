// Generate activity heatmap
(function() {
  const days = ['Mon','','Wed','','Fri','','Sun'];
  const levels = [0,0,1,1,2,2,3,4,3,2,1,2,3,4,3,2,
                  1,0,2,3,4,3,2,1,0,1,2,3,2,1,0,1,
                  2,3,4,3,2,1,0,1,2,3,4,3,2,1,0,1,
                  2,3,3,2,1,0,1,2,3,4,3,2,1,0,1,2,
                  3,4,3,2,1,0,1,2,3,4,3,2,1,0,0,0,
                  1,2,3,4,3,2,1,0,1,2,3,4,3,2,1,0,
                  1,2,3,4,3,2,1,0,1,2,3,4,3,2,1,0];
  const cols = 16; // weeks
  const container = document.getElementById('heatmap');

  // Month labels
  const months = document.createElement('div');
  months.className = 'hm-months';
  const mLabels = ['Feb','','Mar','','Apr','','May','','','','','','','','',''];
  mLabels.forEach(m => {
    const span = document.createElement('span');
    span.className = 'hm-month';
    span.style.width = '15px';
    span.textContent = m;
    months.appendChild(span);
  });
  container.appendChild(months);

  const heatmap = document.createElement('div');
  heatmap.className = 'heatmap';

  for (let r = 0; r < 7; r++) {
    const row = document.createElement('div');
    row.className = 'hm-row';
    const lbl = document.createElement('span');
    lbl.className = 'hm-label';
    lbl.textContent = days[r];
    row.appendChild(lbl);
    const cells = document.createElement('div');
    cells.className = 'hm-cells';
    for (let c = 0; c < cols; c++) {
      const idx = c * 7 + r;
      const cell = document.createElement('div');
      const lvl = levels[idx] || 0;
      cell.className = 'hm-cell' + (lvl > 0 ? ' l'+lvl : '');
      cell.title = lvl === 0 ? 'No activity' : lvl + ' task(s)';
      cells.appendChild(cell);
    }
    row.appendChild(cells);
    heatmap.appendChild(row);
  }
  container.appendChild(heatmap);
})();
