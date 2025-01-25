// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Add hover glow effect and expand functionality to achievements, projects, and certifications
    const items = document.querySelectorAll('.expandable-item');

    // Add hover effect to all expandable items
    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('hovered');
        });

        item.addEventListener('mouseleave', () => {
            item.classList.remove('hovered');
        });

        item.addEventListener('click', () => {
            // Toggle expanded state on click
            item.classList.toggle('expanded');
            // Toggle text visibility inside the item (for showing details)
            const details = item.querySelector('.details');
            if (details) {
                details.classList.toggle('visible');
            }
        });
    });
});
