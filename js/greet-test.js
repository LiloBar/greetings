describe(' greetedNames', function() {

  it('should check is the name is greeted in english', function() {
    var factroryfun = NamesGreeted();

    assert.equal(factroryfun.sa('English', 'LILO'), 'Hello, LILO');
  });

  it('should check if the name is greeted in IsiXhosa', function() {
    var factroryfun = NamesGreeted();
    factroryfun.sa('IsiXhosa', 'LILO');
    assert.equal(factroryfun.sa('IsiXhosa', 'LILO'), 'Molo, LILO');

  });

  it('should check if the name is greeted in Afrikaans', function() {
    var factroryfun = NamesGreeted();
    factroryfun.sa('Afrikaans', 'LILO');
    assert.equal(factroryfun.sa('Afrikaans', 'LILO'), 'Hallo, LILO');

  });
  it('should check if names are greeted in English IsiXhosa, and Afrikaans', function() {
    var factroryfun = NamesGreeted();
    factroryfun.sa('English', 'LILO');
    factroryfun.sa('IsiXhosa', 'LILO');
    factroryfun.sa('Afrikaans', 'LILO');
    assert.equal(factroryfun.sa('English,IsiXhosa,Afrikaans', 'LILO'), undefined);

  });


});

describe(' Counter', function() {

  it('should count just  for a single greeted person', function() {
    var factroryfun = NamesGreeted();
    factroryfun.sa('English', 'LILO');
    factroryfun.sa('IsiXhosa', 'LILO');
    assert.equal(1, factroryfun.counts());
  });

  it('should count atleast 3 greeted people', function() {
    var factroryfun = NamesGreeted();
    factroryfun.sa('English', 'Greg');
    factroryfun.sa('IsiXhosa', 'Sbu');
    factroryfun.sa('Afrikaans', 'Cobus');
    assert.equal(3, factroryfun.counts());

  });



});

describe(' Return Map', function() {

  it('return an empty map', function() {
    var factroryfun = NamesGreeted();
    // factroryfun.sa('English', 'LILO');
    // factroryfun.sa('IsiXhosa', 'LILO');
    assert.deepEqual({}, factroryfun.getNames());
  });

  it('return names greg and lilo in a map', function() {
    var factroryfun = NamesGreeted();
    factroryfun.sa('English', 'LILO');
    factroryfun.sa('IsiXhosa', 'Greg');
    assert.deepEqual({'LILO':0, 'Greg':0}, factroryfun.getNames());
  });
  // it('should count atleast 3 greeted people', function() {
  //   var factroryfun = NamesGreeted();
  //   factroryfun.sa('English', 'Greg');
  //   factroryfun.sa('IsiXhosa', 'Sbu');
  //   factroryfun.sa('Afrikaans', 'Cobus');
  //   assert.equal(3, factroryfun.counts());
  //
  // });



});
