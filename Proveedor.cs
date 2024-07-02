namespace CSS.Creaciones.Pajov.Infraestructure.Entities;

public partial class Proveedor
{
    public decimal IdProveedor { get; set; }

    public string NitProveedor { get; set; } = null!;

    public string NombreProveedor { get; set; } = null!;

    public string DireccionProveedor { get; set; } = null!;

    public string TelefonoProveedor { get; set; } = null!;

    public string ContactoProveedor { get; set; } = null!;

    public string EmailProveedor { get; set; } = null!;

    public string CiudadProveedor { get; set; } = null!;

    public string DepartamentoProveedor { get; set; } = null!;

    public string PaisProveedor { get; set; } = null!;

    public bool EstadoProveedor { get; set; }

    public virtual ICollection<OrdenCompra> OrdenCompras { get; set; } = new List<OrdenCompra>();

}
