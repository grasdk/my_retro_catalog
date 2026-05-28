document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('#global-hardware-registry table');
    if (!table) return;

    const filters = document.querySelectorAll('.column-filter');
    const rows = table.querySelectorAll('tbody tr');

    function filterTable() {
        rows.forEach(row => {
            let visible = true;

            filters.forEach(filter => {
                const colIndex = parseInt(filter.dataset.column);
                const filterValue = filter.value.toLowerCase().trim();
                
                if (!filterValue) return;

                const cell = row.cells[colIndex];
                if (!cell) return;

                const cellText = cell.textContent.toLowerCase();
                
                if (!cellText.includes(filterValue)) {
                    visible = false;
                }
            });

            row.style.display = visible ? '' : 'none';
        });
    }

    // Add event listeners
    filters.forEach(filter => {
        filter.addEventListener('input', filterTable);
        filter.addEventListener('keyup', filterTable); // Better responsiveness
    });

});