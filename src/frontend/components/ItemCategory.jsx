import React from 'react'

export default function ItemCategory({item}) {
    const { name, image, alt, description } = item;
    return (
        <article className="item-category">
          <div className="container">
            <ul className="list">
              <li className="item-img">
                <img src={image} alt={alt} />
              </li>
              <div className="list-header">
                <li className="list-item-name">{name}</li>
              </div>
              <li className="list-item-description">{description}</li>
            </ul>
          </div>
        </article>
      );
    }
