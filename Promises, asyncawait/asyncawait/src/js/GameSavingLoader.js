import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return read().then((buffer) => {
      return json(buffer).then((data) => {
        let result = JSON.parse(data);
        result = new GameSaving(result.id, result.created, result.userInfo);
        return result;
      });
    });
  }
}
