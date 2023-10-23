function openTab(tabId) {
            var tabs = document.getElementsByClassName('tab-content');
            for (var i = 0; i < tabs.length; i++) {
                tabs[i].style.display = 'none';
            }
            document.getElementById(tabId).style.display = 'block';
        }

        function toggleAccordion(accordionId) {
            var accordionContent = document.getElementById(accordionId).getElementsByClassName('accordion-content')[0];
            if (accordionContent.style.display === 'block') {
                accordionContent.style.display = 'none';
            } else {
                accordionContent.style.display = 'block';
            }
        }