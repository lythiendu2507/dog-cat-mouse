function Mouse(name)
{
    this.name = name;
    this.live = false;
}
Mouse.pototype.die = function()
{
    this.live = true;
}
module.exports = Mouse; 