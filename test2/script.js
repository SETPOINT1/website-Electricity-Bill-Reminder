document.addEventListener("DOMContentLoaded", () => {


    Chart.defaults.font.family = "'Prompt', sans-serif";
    Chart.defaults.color = '#888888';

    const warningCtx = document.getElementById('warningChart');
    if (warningCtx) {
        new Chart(warningCtx, {
            type: 'line',
            data: {
                labels: ['สัปดาห์ 1', 'สัปดาห์ 2', 'สัปดาห์ 3', 'สัปดาห์ 4'],
                datasets: [{
                    label: 'แนวโน้มค่าไฟ',
                    data: [500, 800, 1200, 1850], // ข้อมูลสมมติให้พุ่งขึ้น
                    borderColor: '#FF5252', // สีแดงตามธีม Warning
                    borderWidth: 2,
                    tension: 0.4, // ความโค้งของเส้น
                    pointRadius: 3,
                    pointBackgroundColor: '#FF5252',
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }, // ซ่อน Legend
                    tooltip: {
                        backgroundColor: '#333',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        displayColors: false
                    }
                },
                scales: {
                    x: {
                        grid: { display: false }, // ซ่อนตารางแนวตั้ง
                        ticks: { color: '#888' }
                    },
                    y: {
                        display: false, // ซ่อนแกน Y เพื่อความมินิมอล
                        beginAtZero: true
                    }
                }
            }
        });
    }

    const usageCtx = document.getElementById('usageChart');
    if (usageCtx) {
        new Chart(usageCtx, {
            type: 'line',
            data: {
                labels: ['จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส', 'อา'],
                datasets: [{
                    label: 'การใช้ไฟ (kWh)',
                    data: [12, 15, 10, 22, 18, 25, 20], // ข้อมูลสมมติให้ดูหยักๆ
                    borderColor: '#333333', // สีดำ/เทาเข้ม
                    borderWidth: 1.5,
                    tension: 0, // เส้นตรง (ไม่โค้ง) ตามรูปวาด
                    pointRadius: 3,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#333',
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: {
                        grid: { display: false }
                    },
                    y: {
                        display: false, // ซ่อนแกน Y
                        beginAtZero: true
                    }
                }
            }
        });
    }

    const pieCtx = document.getElementById('pieChart');
    if (pieCtx) {
        new Chart(pieCtx, {
            type: 'doughnut', // กราฟโดนัท (มีรูตรงกลาง)
            data: {
                labels: ['กลางวัน', 'กลางคืน'],
                datasets: [{
                    data: [30, 70], // ข้อมูล 30% / 70%
                    backgroundColor: [
                        '#E0E0E0', // สีเทาอ่อน (กลางวัน)
                        '#333333'  // สีเทาเข้ม (กลางคืน)
                    ],
                    borderWidth: 0, // ไม่มีขอบ
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '65%', // ความกว้างของรูตรงกลาง
                plugins: {
                    legend: { display: false }, // ซ่อน Legend (เราทำเองใน HTML แล้ว)
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return context.label + ': ' + context.raw + '%';
                            }
                        }
                    }
                }
            }
        });
    }

});