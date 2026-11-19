import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    const buffer = await read();
    const data = await json(buffer);
    
    let result = JSON.parse(data);
    result = new GameSaving(result.id, result.created, result.userInfo);
    return result;
  }
}
