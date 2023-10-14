it('should start with no suggestions', function(){
    expect(suggestions.innerText).toEqual('');
})

it ('should filter results', function(){
    expect(search('Li')).toEqual(['Lime', 'Olive']);
    expect(search('aPpLe')).toEqual(['Apple', 'Custard apple', 'Pineapple'])
})

afterEach(function(){
    suggestions.innerText = '';
})