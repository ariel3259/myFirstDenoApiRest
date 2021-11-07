const sqlSentences={
    select:"select bin_to_uuid(id) id,name,country,created_at,update_at from user where state like 0",
    insert:"insert into user(id,name,country,state,created_at,update_at) values (uuid_to_bin(uuid()),?,?,0,now(),now())",
    update:"update user set name=?,country=?,update_at=now() where id like uuid_to_bin(?)",
    delete:"update user set state=1 where id like uuid_to_bin(?)"
}

export default sqlSentences;