axios.get('https://api.github.com/users/diego3g') //post, put, delete...
    .then(function(response){
        console.log(response.data.avatar_url);
    })
    .catch(function(error){
        console.warn(error);
    });