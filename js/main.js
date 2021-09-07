let topNavOpened = false;
document.querySelector('.toggle-btn-container').addEventListener('click', () => {
    let topNav = document.getElementById('topNav');

    if (!topNavOpened) {
        topNav.style.setProperty('min-height', '45vh');
        topNavOpened = true;
    } else {
        topNav.style.setProperty('min-height', '9vh');
        topNavOpened = false;
    }
});

/* ***************************************************** */
let sidePanelOpened = false;
document.getElementById('side-panel-btn-container').addEventListener('click', () => {
    let sidePanel = document.querySelector('.content-list-side-panel');
    let contents = document.querySelector('.page-content-container .contents');
    let sidePanelItemContainer = document.querySelector('.side-panel-item-container');
    if (!sidePanelOpened) {
        sidePanel.style.width = '220px';
        if (window.innerWidth > 768) {
            sidePanel.style.background = '#12101d';// extra safety
            contents.style.marginLeft = "220px";
        } else {
            sidePanel.style.background = 'linear-gradient(90deg, #12101d 0px, #12101d 60px,rgba(18,16,29,0.7) 60px,rgba(18,16,29,0.5) 220px)';
        }
        sidePanelItemContainer.style.display = 'block';
        sidePanelOpened = true;
    } else {
        sidePanel.style.width = '60px';
        if (window.innerWidth > 768) {
            contents.style.marginLeft = "60px";
        }
        sidePanelItemContainer.style.display = 'none';
        sidePanelOpened = false;
    }
});
/* ***************************************************** */