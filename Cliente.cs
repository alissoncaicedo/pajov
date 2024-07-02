namespace CSS.Creaciones.Pajov.Infraestructure.Entities;

public partial class Cliente
{
    public decimal IdCliente { get; set; }

    public string NitCliente { get; set; } = null!;

    public string NombreCliente { get; set; } = null!;

    public string DireccionCliente { get; set; } = null!;

    public string TelefonoCliente { get; set; } = null!;

    public string ContactoCliente { get; set; } = null!;

    public string EmailCliente { get; set; } = null!;

    public string CiudadCliente { get; set; } = null!;

    public string DepartamentoCliente { get; set; } = null!;

    public string PaisCliente { get; set; } = null!;

    public bool EstadoCliente { get; set; }

    public virtual ICollection<OrdenCompra> OrdenCompras { get; set; } = new List<OrdenCompra>();

    public virtual ICollection<Remision> Remisions { get; set; } = new List<Remision>();

}
