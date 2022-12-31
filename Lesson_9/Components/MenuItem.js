export default function MenuItem({
  Picture: picture,
  Name: name,
  Price: price,
  Text: text,
}) {
  return `
    <article class="menu-item">
            <div class="menu-item-photo">
              <img src="${picture}" alt="buttermilk pancakes" width="300" height="200">
            </div>
            <div class="menu-item-content">
              <div class="menu-item-content-title">
                <span class="menu-item-content-name">${name}</span>
                <span class="menu-item-content-price">$${price}</span>
              </div>
              <div class="menu-item-content-description">${text}</div>
            </div>
        </article>
    `;
}
