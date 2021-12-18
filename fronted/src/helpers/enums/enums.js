const Enum_Role = {
    ESTUDIANTE : 'ESTUDIANTE',
    LIDER : 'LIDER',
    ADMINISTRADOR: 'ADMINISTRADOR'
};

const Enum_StateUser = {
    PENDIENTE : 'PENDIENTE',
    AUTORIZADO : 'AUTORIZADO',
    NO_AUTORIZADO : 'NO_AUTORIZADO'
};

const Enum_StateProyect = {
    ACTIVO : 'ACTIVO',
    INACTIVO : 'INACTIVO'
};

const Enum_PhaseProyect = {
    INICIADO : 'INICIADO',
    DESARROLLO : 'DESARROLLO',
    TERMINADO : 'TERMINADO',
    NULO : ''
};

const Enum_TypeObjective = {
    GENERAL : 'GENERAL',
    ESPECIFICO : 'ESPECIFICO'
};
export{
    Enum_Role,
    Enum_StateUser,
    Enum_StateProyect,
    Enum_PhaseProyect,
    Enum_TypeObjective
}