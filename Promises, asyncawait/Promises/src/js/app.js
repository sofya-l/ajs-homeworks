import GameSavingLoader from './GameSavingLoader';

(async () => {
    try {
        const result = GameSavingLoader.load();
        console.log(result);
    } catch (error) {
        console.log('Не удалось загрузить сохранение');
    }
})();