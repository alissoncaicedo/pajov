namespace CSS.Creaciones.Pajov.Infraestructure.Entities;

public partial class Pai
{
    public decimal IdPais { get; set; }

    public string NombrePais { get; set; } = null!;

    public string CodigoTelefonicoPais { get; set; } = null!;

    public string EstadoPais { get; set; } = null!;

    public virtual ICollection<Departamento> Departamentos { get; set; } = new List<Departamento>();
}
