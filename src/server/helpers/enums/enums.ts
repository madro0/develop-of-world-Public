enum Enum_Role{
    ESTUDIANTE = 'ESTUDIANTE',
    LIDER = 'LIDER',
    ADMINISTRADOR= 'ADMINISTRADOR'
}
enum Enum_StateUser{
    PENDIENTE = 'PENDIENTE',
    AUTORIZADO = 'AUTORIZADO',
    NO_AUTORIZADO = 'NO_AUTORIZADO'
}
enum Enum_StateProyect{
    ACTIVO = 'ACTIVO',
    INACTIVO = 'INACTIVO'
}
enum Enum_PhaseProyect{
    INICIADO = 'INICIADO',
    DESARROLLO = 'DESARROLLO',
    TERMINADO = 'TERMINADO',
    NULO = ''
}
enum Enum_TypeObjective{
    GENERAL = 'GENERAL',
    ESPECIFICO = 'ESPECIFICO'
}
export{
    Enum_Role,
    Enum_StateUser,
    Enum_StateProyect,
    Enum_PhaseProyect,
    Enum_TypeObjective
}