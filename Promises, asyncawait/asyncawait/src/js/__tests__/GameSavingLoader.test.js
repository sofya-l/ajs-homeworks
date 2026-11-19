import GameSavingLoader from '../GameSavingLoader';

test('Загрузка сохранения', () => {
  const dataTest = {"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}};
  const data = GameSavingLoader.load();
  return data.then((saving) => {
    expect(dataTest).toEqual(saving);
  });
});