pragma solidity >=0.4.21 <0.7.0;
contract SafeGold
{
    event exported(string id,string quant,string toc,string fromc,string expl,uint bill);
    event imported(string id,string toc,string fromc,string impl);
    mapping(string=>string) hashes;
    mapping(string=>string) quantity;
    mapping(string=>string) verify;
    function storegold(string memory golddethash,string memory id,string memory quant,string memory toc,string memory fromc,string memory expl,uint billamt) public
    {
        hashes[id]=golddethash;
        quantity[id]=quant;
        emit exported(id,quant,toc,fromc,expl,billamt);
    }
    function getgolddet(string memory id)public view returns(string memory)
    {
        return hashes[id];
    }
    function getgoldquant(string memory id)public view returns(string memory)
    {
        return quantity[id];
    }
    function givepermit(string memory id,string memory toc,string memory fromc,string memory impl)public
    {
        verify[id]="true";
        emit imported(id,toc,fromc,impl);
    }
    function checkpermit(string memory id)public view returns(string memory)
    {
        return verify[id];
    }

}
