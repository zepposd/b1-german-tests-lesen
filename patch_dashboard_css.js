const fs = require('fs');

const cssToAdd = `
/* ======== Dashboard Styles ======== */
.dashboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.dashboard-card {
    background: #fff;
    border-radius: var(--radius);
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    text-align: center;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-decoration: none;
    color: var(--text-dark);
}

.dashboard-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; height: 4px;
}

.dashboard-card h3 {
    margin: 1rem 0 0.5rem;
    font-size: 1.4rem;
}

.dashboard-card p {
    color: var(--gray);
    font-size: 0.95rem;
    line-height: 1.5;
    flex-grow: 1;
    margin-bottom: 2rem;
}

.card-icon {
    font-size: 3rem;
    opacity: 0.9;
}

.card-status {
    font-weight: 600;
    padding: 0.8rem;
    border-radius: 8px;
    margin-top: auto;
}

/* Active Card (Lesen) */
.active-card {
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: pointer;
}
.active-card::before {
    background: var(--primary);
}
.active-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0,0,0,0.1);
}
.status-ready {
    background: rgba(43, 98, 217, 0.1);
    color: var(--primary);
}
.active-card:hover .status-ready {
    background: var(--primary);
    color: #fff;
}

/* Locked Card */
.locked-card {
    opacity: 0.75;
    background: #f8fafc;
    cursor: not-allowed;
}
.locked-card::before {
    background: var(--gray);
}
.locked-card .card-icon {
    filter: grayscale(100%);
    opacity: 0.5;
}
.status-locked {
    background: #e2e8f0;
    color: var(--gray);
}
`;

fs.appendFileSync('styles.css', cssToAdd);
console.log('Appended dashboard styles to styles.css');
