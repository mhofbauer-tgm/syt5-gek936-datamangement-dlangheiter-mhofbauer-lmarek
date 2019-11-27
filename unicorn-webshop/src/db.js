import PouchDB from 'pouchdb';
export const db = new PouchDB('my_db');
const remoteCouch = new PouchDB('http://redt6a.thekingdave.com:5984/shopping-list');

/**
 * Creates Item in the DB
 * @param title Title of the Shopping-List-Item
 * @param commentary Comment of the Shopping-List-Item
 */
export function createItem(title, commentary="") {
    const shopItem = {
        _id: new Date().toISOString(),
        title,
        commentary,
        completed: false
    };
    db.put(shopItem);
}

/**
 * Deletes specific item from the DB
 * @param shopItem Shopping-List-Item
 */
export function deleteItem(shopItem) {
    db.remove(shopItem);
}


/**
 * If the checkbox-status of an item changes, the item will be changed
 * @param shopItem Shopping-List-Item
 * @param completed
 */
export function checkboxChanged(shopItem, completed) {
    shopItem.completed = completed;
    db.put(shopItem);
}

/**
 * Updates all changes to the DB and takes all the changes from the central-remote-DB
 */
export function sync() {
    return db.sync(remoteCouch, {live: true, retry: true});
}

/**
 * Changes the Title of an item
 * @param shopItem Shopping-List-Item
 * @param newTitle The new Title for the Shopping-List-Item
 */
export function updateTitle(shopItem, newTitle) {
    shopItem.title = newTitle;
    db.put(shopItem);
}

export function updateAmount(shopItem, newCommentary) {
    shopItem.commentary = newCommentary;
    db.put(shopItem);
}



