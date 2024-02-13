export const getImageUrl=(path)=>
{
    return new URL(`/assets/${path}`,import.meta.url).href;
};  //appending the base url onto the relative path and then passing it to the URL constructor to get the absolute path.